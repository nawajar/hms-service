/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5dv7oxspkohcjlx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o5ydzabg",
    "name": "room",
    "type": "relation",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "i6ktdxihtab2dj1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5dv7oxspkohcjlx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o5ydzabg",
    "name": "room",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "i6ktdxihtab2dj1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
