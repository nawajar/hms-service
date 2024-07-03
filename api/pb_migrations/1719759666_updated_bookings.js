/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5dv7oxspkohcjlx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "anxb3ii5",
    "name": "paid",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5dv7oxspkohcjlx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "anxb3ii5",
    "name": "paid",
    "type": "bool",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
