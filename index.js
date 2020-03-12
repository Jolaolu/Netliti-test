
/**
 * Concatenates the supplied string to another to return a full name
 *
 * @param {String } firstName   The string to create a fullname
 * @param { callback} callback The action to perform
 */


const f = ( firstName, callback ) => {
    setTimeout( () => {
        if ( !firstName ) return callback( new Error( 'firstName is required' ) )
        const fullName = `${ firstName } Smith`
        return callback( fullName )
    }, 2000 )
}

// f( 'Andrew', console.log )
// f( null, console.log )



/**
 * Concatenates the supplied string to another to return a full name
 *
 * @param {String } firstName   The string to create a fullname
 * @param { callback} callback The action to perform
 */

 /**
  * 
    Using a promise eliminates the need for a second argument in our Newfn 
    "reject" is only called when the required argument is not met
    "resolve " allows the promise status nto pass 
    The content of the resolve is displayed in the then block and errors are shown in the catch 
 */

const Newfn = ( firstName ) => {
    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {
            if ( !firstName ) return reject( new Error( 'firstName is required' ) )
            const fullName = `${ firstName } Smith`
            return resolve( fullName )

        }, 2000 )
    } )

}

Newfn( 'Anjolaoluwa' )
    .then( data => console.log( data ) )
    .catch( e => console.log( e, 'error' ) )

Newfn( null )
    .then( data => console.log( data ) )
    .catch( e => console.log( e, 'error' ) )