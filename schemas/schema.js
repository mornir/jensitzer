// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import documents
import beer from './documents/beer'
import hop from './documents/hop'
import malt from './documents/malt'
import yeast from './documents/yeast'

// Import objects
import ingredient from './objects/ingredient'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([hop, yeast, malt, ingredient, beer]),
})
