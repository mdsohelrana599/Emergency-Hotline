<!-- question No. 1. --->

1. gatElementById হলো javaScript এর Dom selection method যেটা দিয়ে আমরা element কে ID attribute দিয়ে select করি ।

2. gatElementClassName হলো javaScript এর Dom selection method যেটা দিয়ে আমরা element কে class attribute দিয়ে select করি ।

3.  querySelector প্রথম যে element css selector এর সাথে match করবে সেটাকে select করে ।

4. querySelectorAll সব element css selector এর সাথে match করবে সেগুলোকে select করে ।

<!-- question No. 2. --->

1. ওয়েবপেজের DOM = Document Object Model একটা নতুন  HTML element বানাই সেটা ওয়েবপেজের মধ্যে  ঢুকিয়ে দেওয়া হয়  ।

উদাহরণ:
createElement
appendChild

<!-- question No. 3. --->

1. Event Bubbling কোনো child element এ event ঘটে (যেমন click) তখন সেই event প্রথমে child element এ trigger হয় তারপর সেটা ধাপে ধাপে তার parent - grandparent - document পর্যন্ত উপরে দিকে চলে যায়।এই প্রক্রিয়াকেই বলে event bubbling

<!-- question No. 4. ---> 

1. Event Delegation হলো একটা টেকনিক যেখানে আমরা event listener child element এ না দিয়ে তার common parent element এ দিই।তারপর event bubbling ব্যবহার করে চিহ্নিত করি তারপর কোন child element এ event ঘটেছে।

2. Its Useful-->
কম কোড লাগে
Performance ভালো হয়
Dynamic elements hendle করা সহজ

