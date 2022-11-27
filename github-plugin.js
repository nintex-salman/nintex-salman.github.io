
import {
    html,
    LitElement,
  } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";
  // defining the component
  export class GitHubPages extends LitElement {
    // return a promise for contract changes.
    static async getMetaConfig() {
      return {
        title: "githubpages",
        fallbackDisableSubmit: false,
        version: "1.2",
        description: "test example",
        iconUrl: 'one-line-numbers',
        groupName: "Testing",
        properties: {
          intAttr: {
            title: "Integer attribute",
            description: "From 1 - 10",
            type: "integer",
            minimum: 1,
            maximum: 10,
            defaultValue: 1,
          },
          numberAttr: {
            title: "Decimal attribute",
            description: "From 1 - 10",
            type: "number",
            minimum: 1,
            maximum: 10,
            defaultValue: 1.23,
          },
  
          textAttr: {
            title: "Text attribute",
            type: "string",
            maxLength: 50,
            defaultValue: "abc",
          },
          boolAttr: {
            title: "Boolean attribute",
            type: "boolean",
            defaultValue: "true",
          },
          choiceAttr: {
            title: "Choice attribute",
            type: "string",
            enum: ["Option A", "Option B", "Option C"],
            showAsRadio: true,
            verticalLayout: false,
            defaultValue: "Option A",
          },
          value: {
            title: "Value",
            type: "string",
            isValueField: true,
            defaultValue: "hello plugin",
          },
        },
        standardProperties: {
          readOnly: true,
          required: true,
          description: true,
          visibility: true,
          tooltip: true,
          fieldlabel: true,
          placeholder: true,
        },
        designer: {
          staticProperties: ["boolAttr", "numberAttr", "choiceAttr"],
          canvasRestrictions: {
            minSize: 12,
            isFullRow: true,
          },
        },
      };
    }
    render() {
      return html`<input placeholder="githubpages" />`;
    }
  }
  
  // registering the web component
  const elementName = "githubpages-test";
  customElements.define(elementName, GitHubPages);
