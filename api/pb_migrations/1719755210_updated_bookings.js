/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5dv7oxspkohcjlx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrf6ggqe",
    "name": "cus_id_card",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxbplq1q",
    "name": "customer_address",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5dv7oxspkohcjlx")

  // remove
  collection.schema.removeField("zrf6ggqe")

  // remove
  collection.schema.removeField("cxbplq1q")

  return dao.saveCollection(collection)
})
