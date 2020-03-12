/**
 first function

 */
/**
 * Concatenates the supplied string to another to return a full name
 *
 * @param {String } firstName   The string to create a fullname
 * @param { callback} callback The action to perform
 */


const f = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) return callback(new Error('firstName is required'))
    const fullName = `${firstName} Smith`
    return callback(fullName)
  }, 2000)
}

f('Andrew', console.log)
f( null, console.log )

 

/**
 * Concatenates the supplied string to another to return a full name
 *
 * @param {String } firstName   The string to create a fullname
 * @param { callback} callback The action to perform
 */


export const Newfn = ( firstName ) => {
    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {
            if ( !firstName ) return reject( new Error( 'firstName is required' ) )
            const fullName = `${ firstName } Smith`
            return resolve( fullName )

        }, 2000 )
    } )

}
