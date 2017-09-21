# How to reproduce error:

ng build --prod

# Error 

TypeError: Cannot set property 'fixed' of undefined


# Info

For the source go to src/app.component.ts line 17 .
I know the code is horrendous but shouldn't it fail before uglify throws this error which is untraceable ?
