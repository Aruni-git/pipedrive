FROM cypress/base:14.19.0

RUN mkdir /cyapp
WORKDIR /cyapp
COPY . /cyapp
RUN npm install
RUN $(npm bin)/cypress verify
RUN npx cypress run