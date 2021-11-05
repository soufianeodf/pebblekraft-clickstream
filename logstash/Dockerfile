FROM docker.elastic.co/logstash/logstash:7.14.1

COPY logstash.conf /usr/share/logstash/pipeline/
COPY MyEventRecord.avsc /usr/share/logstash/config/
