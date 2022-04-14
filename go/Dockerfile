FROM golang:latest AS stage

WORKDIR /go/src

COPY hello.go .

RUN go build -ldflags "-s -w" hello.go

FROM scratch

COPY --from=stage /go/src/hello /

CMD ["/hello"]