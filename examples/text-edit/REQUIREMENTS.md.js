
module.exports = function(){

  this.register( 'npm-registration', `The program (?<name>[a-zA-Z0-9-]+) must be listed on npm and owned by user (?<user>[a-zA-Z0-9-]+) as soon as possible.` );
  this.register( 'github-registration', `It must be available on github under user (?<user>[a-zA-Z0-9-]+) and repository ((?<name>[a-zA-Z0-9-]+)).` );

}
