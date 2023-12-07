# Backend Engineer Take Home Test

# Dependencies
- axios
- cheerio

# For Docker

## Build Docker image
```
$ docker build . -t fetch-web
```

## Run program for Section 1
```
$ docker run -v ${PWD}:/app fetch-web https://www.google.com https://autify.com
```
### Output
```
Fetched https://www.google.com and saved as www.google.com.html
--------------------------
Fetched https://autify.com and saved as autify.com.html
--------------------------
```

## Run program for Section 2
```
$ docker run -v ${PWD}:/app fetch-web --metadata https://www.google.com https://autify.com
```

### Output
```
Fetched https://www.google.com and saved as www.google.com.html
--------------------------
site: Google
num_links: 18
images: 1
last_fetch: Thu, 07 Dec 2023 04:57:15 GMT
--------------------------
Fetched https://autify.com and saved as autify.com.html
--------------------------
site: Autify, AI-powered software testing automation platform
num_links: 88
images: 117
last_fetch: Thu, 07 Dec 2023 04:57:16 GMT
--------------------------
```

# For Local

## Prerequisites
- NodeJS (v18.15.0)

## Installation
```
$ npm install
```

## Run program for Section 1
```
$ node fetch.js https://www.google.com https://autify.com
```
### Output
```
Fetched https://www.google.com and saved as www.google.com.html
--------------------------
Fetched https://autify.com and saved as autify.com.html
--------------------------
```

## Run program for Section 2
```
$ node fetch.js --metadata https://www.google.com https://autify.com
```

### Output
```
Fetched https://www.google.com and saved as www.google.com.html
--------------------------
site: Google
num_links: 18
images: 1
last_fetch: Thu, 07 Dec 2023 04:57:15 GMT
--------------------------
Fetched https://autify.com and saved as autify.com.html
--------------------------
site: Autify, AI-powered software testing automation platform
num_links: 88
images: 117
last_fetch: Thu, 07 Dec 2023 04:57:16 GMT
--------------------------
```
