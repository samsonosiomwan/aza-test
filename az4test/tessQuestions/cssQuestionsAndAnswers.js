/*

In your own words, explain css specificity.
    ans: css specificity means the ability to apply still directly and overide previous styles in an elements.
        i.e inline styling has more specificity than imported sytles. Another example is that css id carry more specificity
            than class styling


In your own words, explain, what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?
    ans: !important checks the specificity of a style, when a particalar style is marke !important it means it should override any other sytles
         and use the style marked with !important. the special circumstances where it's behaviour might not be what you expect is when you are using it with global styling the behaviour might not be what you expect.


What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why?
    ans: my preferred layout styling is flex because it helps you to follow the mobile first webdesing approach through
         the reponsive properties it provides on the go.


Are negative margins legal and what do they do (margin: -20px)?
    ans: yes depending on the use case. Negative margin allows us to make use of space provided by the parent container of a 
         child element. 


If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead (the margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it?
    this happens because of the CSS box model. one way to prevent this is through margin callapsing.



*/
