# Custom-Multi-Select-JS
Custom multi select using HTML, CSS and JavaScript 

## Table of contents

- [Overview](#overview)
- [Design](#design)
    - [select-container class](#select-container-class)
    - [select-options class](#select-options-class)
- [Operations](#operations)
    - [Show/hide options](#1-showhide-options)
    - [Select/unselect options](#2-selectunselect-options)
    - [Clear all selected options](#3-clear-all-selected-options)

## Overview

This is a custom multi-select dropdown that is designed to capture multiple options from a select dropdown. It allows the user to select multiple options, remove selected options, clear all options at once, and show the selected options at the top. The process is divided into two parts: the first dealing with the look and feel of the component, and the second dealing with the inner logic required to achieve the goal.

## Design

The whole multi-select dropdown is contained within a div. This div has a class called "select-container" which is responsible for putting the rest of its child elements in place. 

The _select-container_ div has 5 childern as follow.

1. A _span_ with class "select-value" which will show all the selected value.

2. A _button_ with class "select-clear-btn" use to clear all the selected options.

3. A _div_ with class "select-divider" use to create a seperater between the cross sign and caret symbol.

4. A _div_ with class="select-caret" use to create  caret to make it look like select dropdown.

5. A _ul_ with class "select-options", it will hold the options.


### select-container class

This class is responsible for putting all its children in right place. Some of the important class attributes are

1. position relative, this combined with class "select-options" position absolute allow us to positin options directly below everything without pushing them out of the select-container _div_ in HTML.

2. outline none, this is remove any default outline so that we can add our own outline on focus. To make it work we also need to add tabindex attribute to select-container _div_.

### select-options class

This class is responsible for aligning options below select-container _div_. It uses position absolute to achieve it.

## Operations

### 1. Show/hide options

**Functions**: toggleOptions(), closeOptions()

- To show/hide options we simply change the display attribute of select-options _ul_ from block to none and vice versa.

- There are two event listener on select-container _div_
    1. Click, to toggle display when user click on the select-container _div_.
    2. Blur, to hide options when user click outside the select-container _div_.

### 2. Select/unselect options

**Functions**: selectOption(), renderSelectedValues()

- To select and unselect selected options we have added a click event listener on the select-options _ul_.
- When user click on any _li_ element the event is propogated to its parent element _ul_.
- We capture this event and varify if its comining from a _li_. If yes then we check if its value is present in the **selectedValues** variable, remove if present otherwise add it.
- At last we call the **renderSelectedValues** function to render selected options in select-value _span_.

### 3. Clear all selected options

**Functions**: clearSelectedOptions()

- To clear all selected options add a click event listener on select-clear-btn _button_.
- Empty **selectedValues** array and inner HTML of select-value _span_.


### 4. Remove options from select-value

**Functions**: removeOption()

- To clear selected options from selec-value _span_ add a click event listener on it.
- When a event is propogated from its child check if its coming from button on cross icon in the button.
- In both the cases remove the incoming value from the **selectedValues** array and call the **renderSelectedValues** function.
