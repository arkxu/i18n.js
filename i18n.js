//The MIT License (MIT)

//Copyright (c) 2013 Fangzhou Ark Xu

var i18n = new function(){
  this.dictionary;
  this.language = window.navigator.language || window.navigator.userLanguage || 'en';
  this.lang_code = this.language.substring(0,2);

  this.setDictionary = function(dict){
    dictionary = dict;
  };

  this.t = function(key){
    return dictionary[this.lang_code][key];
  };
}
