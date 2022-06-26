
  class Formatter {
    //add static methods here
    static capitalize(string){
      return string.charAt(0).toUpperCase() + string.slice ( 1 )
    }
  
    static sanitize( string){
      return string.replace( /[^A-Za-z0-9 '-]/g, '')
    }
    static titleize(sentence){
      let exceptedString =  ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
      let output = [];
      let stringArray = sentence.split( " ")
      for (let i =0; i < stringArray.length; i++){
      if (i == 0){
        output.push( this.capitalize(stringArray[i]))
      }else{
        if (exceptedString.includes(stringArray[i])){
          output.push(stringArray[i])
        }else{
          output.push(this.capitalize(stringArray[i]))
        }
      }
    }
    return output.join( " ");
  }
  }
  
  Formatter.titleize( "getting giggles")
  Formatter.titleize( "a tale of two cities")