// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import comment from "./comment";
import pin from "./pin";
import postedBy from "./postedBy";
import save from "./save";
import user from "./user";
import likes from './likes';
import followers from './followers';
import following from './following';
import pinCollection from './pinCollection';
import collectionItem from './collectionItem';
import category from './category';
import uploadedPin from './uploadedPin';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    user,pin,uploadedPin,pinCollection,postedBy,category,save,comment,likes,followers,following,collectionItem
  ]),
})
