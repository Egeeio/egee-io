FROM node:latest
ENV TERM=xterm-256color

RUN adduser egeeio
RUN npm install -g ember-cli bower
ADD . /home/egeeio
RUN chown -R egeeio /home/egeeio
WORKDIR /home/egeeio
USER egeeio
RUN npm install
RUN bower install
CMD ["ember", "server"]
