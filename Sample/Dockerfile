FROM node

MAINTAINER Admin kenjimoritata@yahoo.co.jp

# buildするときに実行される
RUN echo "now building"

# runするときに実行される
CMD node -v && npm i -g browser-sync && browser-sync start --server --files "~/demo/*.html"
