#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <Firebase_ESP_Client.h>
#include <Wire.h>
#include <SoftwareSerial.h>
#define DE D0
#define RE D1
SoftwareSerial JXBS_3001_TR(D2, D3);
//DE to pin D0 (GPIO 16) of Node MCU
//RE to pin D1 (GPIO 5) of Node MCU
//RO to Pin D2 (GPIO 4) of Node MCU
//DI to Pin D3 (GPIO 0) of Node MCU

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
#define WIFI_SSID "************************"
#define WIFI_PASSWORD "************************"

// Insert Firebase project API Key
#define API_KEY "***************************************"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://impact2050-769e9-default-rtdb.asia-southeast1.firebasedatabase.app/"

//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;

const byte temphumid[] =    {0x01, 0x03, 0x00, 0x12, 0x00, 0x02, 0x64, 0x0E};
const byte soilmoisture[] = {0x01, 0x03, 0x00, 0x12, 0x00, 0x01, 0X24, 0x0F};
const byte conduct[] =      {0x01, 0x03, 0x00, 0x15, 0x00, 0x01, 0x95, 0xCE};
const byte ph[] =           {0x01, 0x03, 0x00, 0x06, 0x00, 0x01, 0x64, 0x0B};
const byte phos[] =         {0x01, 0x03, 0x00, 0x1f, 0x00, 0x01, 0xB5, 0xCC};
const byte pota[] =         {0x01, 0x03, 0x00, 0x20, 0x00, 0x01, 0x85, 0xC0};
const byte nitro[] =        {0x01, 0x03, 0x00, 0x1e, 0x00, 0x01, 0xE4, 0x0C};

float pH;
float moisture;
float nitrogen;
float phosphorus;
float potassium;
int plant;
float temperature;
float humidity;
float conductivity;

void setup()
{
  pinMode(RE, OUTPUT);
  pinMode(DE, OUTPUT);
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("ok");
    signupOK = true;
  }
  else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop()
{
  SensorRead();
  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0))
  {
    sendDataPrevMillis = millis();
    updateDatabase("Sensor/nitrogen", nitrogen);
    updateDatabase("Sensor/phosphorus", phosphorus);
    updateDatabase("Sensor/potassium", potassium);
    updateDatabase("Sensor/moisture", moisture);
    updateDatabase("Sensor/pH", pH);
    updateDatabase("Sensor/temperature", temperature);
    updateDatabase("Sensor/humidity", humidity);
    updateDatabase("Sensor/conductivity", conductivity);
    updateDatabase("Sensor/plant", plant);
    //updateDatabase("Sensor/phosphorus",1.00);
  }
}

void updateDatabase(String path, float value)
{
  // Write an Float number on the database path Sensor/float
  if (Firebase.RTDB.setFloat(&fbdo, path, value)) {
    Serial.println("PASSED");
    Serial.println("PATH: " + fbdo.dataPath());
    //Serial.println("TYPE: " + fbdo.dataType());
  }
  else {
    Serial.println("FAILED");
    Serial.println("REASON: " + fbdo.errorReason());
  }
}

void SensorRead()
{
  humidity = readVal(temphumid, 3, 4, 10);
  temperature = readVal(temphumid, 5, 6, 10);
  moisture = readVal(soilmoisture, 3, 4, 10);
  conductivity = readVal(conduct, 3, 4, 1);
  pH = readVal(ph, 3, 4, 100);
  phosphorus = readVal(phos, 3, 4, 1);
  potassium = readVal(pota, 3, 4, 1);
  nitrogen = readVal(nitro, 3, 4, 1);

  Serial.print("Soil Temperature: ");
  Serial.print(temperature);
  Serial.println(" deg C");
  Serial.print("Soil Humidity: ");
  Serial.print(humidity);
  Serial.println(" %RH");
  Serial.print("Soil Moisture: ");
  Serial.print(moisture);
  Serial.println(" %");
  Serial.print("Soil Conductivity: ");
  Serial.print(conductivity);
  Serial.println(" us/cm");
  Serial.print("Soil pH :");
  Serial.print(pH);
  Serial.println(" pH");
  Serial.print("Phosphorous Content: ");
  Serial.print(phosphorus);
  Serial.println(" mg/kg");
  Serial.print("Potassium Content: ");
  Serial.print(potassium);
  Serial.println(" mg/kg");
  Serial.print("Nitrogen Content: ");
  Serial.print(nitrogen);
  Serial.println(" mg/kg");
  Serial.println("\n");
}

float readVal(const byte InquiryFrame[] , byte dataIndex1, byte dataIndex2, byte divider)
{
  byte readCount = 0;
  String temp;
  while (readCount != 2)
  {
    JXBS_3001_TR.begin(9600);
    delay(50);
    digitalWrite(DE, HIGH);
    digitalWrite(RE, HIGH);
    delay(15);
    JXBS_3001_TR.write(InquiryFrame, 8);
    digitalWrite(DE, LOW);
    digitalWrite(RE, LOW);
    byte values[11];
    for (byte i = 0; i < 11; i++)
    {
      values[i] = JXBS_3001_TR.read();
    }
    temp =  String(values[dataIndex1], HEX) + String(values[dataIndex2], HEX);
    JXBS_3001_TR.end();
    readCount++;
  }
  float value = (strtol(temp.c_str(), NULL, 16));
  value = float((value) / float(divider));
  return value;
}
