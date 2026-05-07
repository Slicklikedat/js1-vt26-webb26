function greetUser(name) {
    if (name) {
      return "Hej " + name
    }
    else {
      return "Hej gäst"
    }
}


console.log(greetUser(""))
