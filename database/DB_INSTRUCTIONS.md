# Pull MongoDB Image

```
docker pull mongo
```

# Run MongoDB Container

```
docker run --name url-mongo -d \
           -p 27017:27017 \
           -v mgdata:/data/db \
           mongodb/mongodb-community-server:latest
```

# Confirm the instance is running

## Shell into the container

```
docker exec -it url-mongo mongosh
```

## Confirm instance existence

```
db.runCommand(
  {
    hello: 1
  }
)
```

Should return:

```
{
   isWritablePrimary: true,
   topologyVersion: {
      processId: ObjectId("63c00e27195285e827d48908"),
      counter: Long("0")
},
   maxBsonObjectSize: 16777216,
   maxMessageSizeBytes: 48000000,
   maxWriteBatchSize: 100000,
   localTime: ISODate("2023-01-12T16:51:10.132Z"),
   logicalSessionTimeoutMinutes: 30,
   connectionId: 18,
   minWireVersion: 0,
   maxWireVersion: 20,
   readOnly: false,
   ok: 1
}
```
