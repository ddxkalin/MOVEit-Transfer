# MOVEit Transfer

## Project Requirements
- Create an interface that allows a user to upload a file to MOVEit Transfer using the REST API
- The app should allow for any username/password and upload the file into the user’s home folder
- Post the code to a Github repo
- Repo should have instructions on how to run the sample (including any machine or browser configuration required)
- You may choose any language, framework or interface pattern

## Resources
- Basics of using the MOVEit Transfer web UI: https://docs.ipswitch.com/MOVEit/Transfer2020/Help/Admin/en/index.htm#31238.htm
- API Documentation - https://docs.ipswitch.com/MOVEit/Transfer2020_1/Api/rest/
- Interactive Swagger documentation of REST APIs: https://mobile-1.moveitcloud.com/swagger/ui/index
- Authorization help
The API uses Access Tokens to validate the user. The first step is to get the token by providing the username and password to the server
After the token is received it is added to headers as “Authorization” = “Bearer ”
Auth-sample.txt attachment is a PowerShell example that should help you understand how to get the token and use i
- Disable CORS in Chrome
 ``` 
 *OSX
Quit Chrome
Go to Terminal

Execute the following command:

open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/Chrome dev session" --disable-web-security

*Windows
Close all Chrome windows
Open "Run"
Execute the following command
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
```
