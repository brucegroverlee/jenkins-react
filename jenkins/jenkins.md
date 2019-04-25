# Jenkins directions

## Run the Jenkins container

On MacOS or Linux
```
docker run \
  --rm \
  -u root \
  -p 80:8080 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkinsci/blueocean
```

On Windows
```
docker run ^
  --rm ^
  -u root ^
  -p 80:8080 ^
  -v jenkins_home:/var/jenkins_home ^
  -v /var/run/docker.sock:/var/run/docker.sock ^
  -v "%HOMEPATH%":/home ^
  jenkinsci/blueocean
```
