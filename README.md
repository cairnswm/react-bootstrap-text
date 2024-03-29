# React-Bootstrap-Text

Extends *React-Bootstrap* (https://react-bootstrap.github.io/) with a text component that encapsulates the bootstrap Text Utility classes (https://getbootstrap.com/docs/5.2/utilities/text/). If an href is included a link will be created (as will be ignored).

## Example

```javascript
import Text from "react-bootstrap-text";

...
<Text uppercase bold underline>This text is uppercase, bold and underlined</Text>
```

Valid props and allowed values are:

Aligns the text in the wrapping container either for all sizes, or only on specific sized screens
- align: 'start','center','end'
- xs: 'start','center','end'
- sm: 'start','center','end'
- md: 'start','center','end'
- lg: 'start','center','end'
- xl: 'start','center','end'

Aligns text similar to align="...":
- start
- center
- end

Wrap text within container (default) or do not wrap text (overflows out of containing container)
- wrap
- nowrap

Affect the case of the text:
- lowercase
- uppercase
- capitalize


Change the size of the text:
- size: '1','2','3','4','5','6'


Change the text weight and style:
- bold
- bolder
- normal
- light
- lighter
- italic
- underline
- strike

Decoration can also be set using: (None allows resets if Text items are nested)
- decoration: 'underline','line-through','none',

Set monospacing:
- mono


Allow word break wihtin words:
- wordbreak


Affect the lineheight within a block of text
- lineheight: '1','sm','base','lg'


Reset all values (if within nested Text blocks)
- reset


Truncate Text based on visible size (https://getbootstrap.com/docs/5.2/helpers/text-truncation/)
- truncate

Also supports the following standard react-bootstrap options
- as: Outputs the text as a specific HTML tag - default is span
- bg: set background variant


For more details look at the bootstrap documentation

