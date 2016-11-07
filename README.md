# ng-email-autocomplete [![MIT Licence](https://img.shields.io/badge/licence-MIT-blue.svg)](https://magno.mit-license.org/2016)

Smarter email fields for a better UX.

[DEMO](https://git.io/vPWCB)

![Preview](https://raw.githubusercontent.com/magnobiet/ng-email-autocomplete/master/preview.png)

## Requirements

- [AngularJS](https://github.com/angular/angular.js)
- [jQuery](https://github.com/jquery/jquery)
- [jQuery Email Autocomplete](https://github.com/10w042/email-autocomplete)

## TL;DR

### Installation

```bash
bower install --save ng-email-autocomplete
```

### Usage

```html
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery.email-autocomplete.js"></script>

<script src="/path/to/angular.js"></script>
<script src="/path/to/ng-email-autocomplete.js"></script>
```

```js
angular
	.module('AppName', [
		'ngEmailAutocomplete'
	]);
```

```html
<input
	type="email"
	data-ng-model="vm.email"
	data-email-autocomplete
	data-suggestion-class="email-suggestion"
	data-domains="['example.org']">
```

```css
.email-suggestion {
	color: #ccc;
}
```

## License

This package is licensed under the [MIT license](https://magno.mit-license.org/2016). Copyright © Magno Biét
