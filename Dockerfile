# variables
ARG NODE=node:15.8.0-alpine

FROM ${NODE}

ARG APP_DIR='/app/'
ARG BUILDER_DIR='builder/'
ARG DEPLOY_DIR='deploy/'
ARG INIT_DIR='dist/apps/template/'
# delete variable
ARG ENV='development'

ENV NODE_ENV=${ENV}

RUN apk --no-cache -U upgrade
RUN adduser --home ${APP_DIR} appUser -D

USER appUser
# working directory setup
WORKDIR ${APP_DIR}${BUILDER_DIR}

COPY --chown=appUser . ${APP_DIR}${BUILDER_DIR}
# RUN yarn install --no-lockfile
RUN npm install --force

RUN npm run build:${ENV}

WORKDIR ${APP_DIR}${DEPLOY_DIR}
RUN cp -r ${APP_DIR}${BUILDER_DIR}dist ${APP_DIR}${DEPLOY_DIR}dist
RUN cp -r ${APP_DIR}${BUILDER_DIR}node_modules ${APP_DIR}${DEPLOY_DIR}node_modules
RUN cp -r ${APP_DIR}${BUILDER_DIR}.env.${ENV} ${APP_DIR}${DEPLOY_DIR}${INIT_DIR}.env.${ENV}

RUN rm -rf ${APP_DIR}${BUILDER_DIR}

# RUN yarn install --production --ignore-optional --no-lockfile
# RUN yarn cache clean
RUN npm cache clean --force

WORKDIR ${APP_DIR}${DEPLOY_DIR}${INIT_DIR}

ENTRYPOINT ["node"]
CMD ["main"]
