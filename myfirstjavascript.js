/*
how to create modules?
1-we will add (type="module") attribute to the HTML element that we want to use in the script element that we sourced the file from.
2-we will add (Export) keyword before the variable that we want to take.
3-we will add(import {-variable name-} from '../folder-name\file-name';).
-modules don't work with the HTML file directly, so they won't work only with live server. you have to open it with live server.
-if we use (as) keyword as(import{variable-name as new-variable-name} from...), we will rename the variable so there won't be conflict between variables(optional).
-if you want to add another variable to your js file and this variable is from the same file that you imported before you don't need to import it again.
just add(,variable-name) with the previous imported variable.
-if we add a (.) in the import filepath it will go outside of the first folder only but with two dots (..) it will go away from the folder.
-in if statement the null value is falsy, so (!null) is truthy.

*/
import dayjs from '';