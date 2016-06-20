## Render Lifecycle

On component render, with more than collapsed limit(10 for example).
The component will show one item, displaying "10 items..".
As the user adds another item. The list will grow, but the 10 collapsed items,
will stay collapsed as 1 item. On the user adding another 5 items for example, 
and saving. Re-opening should show a new item collapsed item rendered "15 items ..".

## Tree structure

User's initial input:
`{1: { 12:{}, 13:{}, 14:{}, 15:{} }, 2: { 21:{}, 22:{} } }`

On returning to the input later, the tree structure will be, where collapse limit was 4:
`{1: { collapsed: { 12:{}, 13:{}, 14:{}, 15:{} } }, 2: { 21:{}, 22:{} } }`

On continuing to add to the input, the tree structure will be become:
`{1: { collapsed: { 12:{}, 13:{}, 14:{}, 15:{} } }, 16:{}, 17:{} , 2: { 21:{}, 22:{} } }`


## Small spec

### Paths

As the component is very customizable, each option has an "optional" path.
Available options paths are as follows:

optionSelectionLimitPath: (default='selectionLimit')
optionCollapseLimitPath: (default='collapseLimit')
optionChildrenPath: (default='children')
optionLabelPath: (default='label')
optionValuePath: (default='id')

### Expand path
To indicate to the component if children are expanded or not, use the expand option.
Scope: LOCAL -> as it can be defined on an item anywhere in the tree, it affects the immediate area.

### Selection Limit
To indicate to the component that only a certain number of options will be selectable.
Scope: GLOBAL & LOCAL -> as it will only ever be defined on the component top level api.

### Collapse Limit
To indicate how many children should be collapsed when the expand option is false.
Scope: GLOBAL & LOCAL -> implemented both for now
Lifecycle, only applies on initial render, after the user has started selection again, ignore option.

### Current Issues/Todos

Issues

[ ] With the new collapse logic, auto collapse happens after the first item is delete.

Todos

[ ] Consider moving some part of component into a "top level" for easier testing
