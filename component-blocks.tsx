import React from 'react';
import { NotEditable, component, fields } from '@keystone-6/fields-document/component-blocks';

// Custom Image and File field stored in Azure Storage blobs
import { AzureStorageConfig, azureStorageImage } from '@k6-contrib/fields-azure';

// import { test } from './schema';

const config: AzureStorageConfig = {
  azureStorageOptions: {
    account: process.env.AZURE_STORAGE_ACCOUNT_NAME || '',
    accessKey: process.env.AZURE_STORAGE_ACCESS_KEY || '',
    container: process.env.AZURE_STORAGE_CONTAINER || '',
    url: process.env.AZURE_STORAGE_ACCOUNT_HOST
      ? `${process.env.AZURE_STORAGE_ACCOUNT_HOST}${process.env.AZURE_STORAGE_ACCOUNT_NAME}`
      : undefined,
  },
};

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const componentBlocks = {
  quote: component({
    preview: (props) => {
      return (
        <div
          style={{
            borderLeft: '3px solid #CBD5E0',
            paddingLeft: 16,
          }}
        >
          <div style={{ fontStyle: 'italic', color: '#4A5568' }}>{props.fields.content.element}</div>
          <div style={{ fontWeight: 'bold', color: '#718096' }}>
            <NotEditable>— </NotEditable>
            {props.fields.attribution.element}
          </div>
        </div>
      );
    },
    label: 'Quote',
    schema: {
      content: fields.child({
        kind: 'block',
        placeholder: 'Quote...',
        formatting: { inlineMarks: 'inherit', softBreaks: 'inherit' },
        links: 'inherit',
      }),
      attribution: fields.child({ kind: 'inline', placeholder: 'Attribution...' }),
    },
    chromeless: true,
  }),
  Hero: component({
    preview: props => {
      return (
          <div>
            {props.fields.title.element}
            {/* {props.fields.test.element} */}
          </div>
      );
    },
    label: 'Hero',
    schema: {
      title: fields.child({ kind: 'inline', placeholder: 'Title...' }),
      // test: fields.child({ kind: 'inline', placeholder: test }),
      // image: azureStorageImage({azureStorageConfig: config }),
    },
  }),
};