From python:2.7-slim

WORKDIR /app

ADD . /app

RUN pip install --trusted-host pypi.python.org -r requirements.txt

EXPOSE 80

ENV NAME World
# Set proxy server, replace host:port with values for your servers
ENV http_proxy host:port
ENV https_proxy host:port

CMD ["python", "app.py"]
