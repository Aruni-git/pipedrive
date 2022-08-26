FROM cypress/browsers:node14.19.0-chrome100-ff99-edge

RUN mkdir /cyapp
WORKDIR /cyapp
COPY . /cyapp
RUN npm install
RUN $(npm bin)/cypress verify
RUN npx cypress run -b chrome --headless