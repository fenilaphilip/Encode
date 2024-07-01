export interface Item {
    id: number,
    name: string,
    heading: string,
    description: string,
}


export const Items: Array<Item> = [{
    id: 1,
    name: 'URL',
    heading: 'URL Encode',
    description: `URL encoding, officially known as percent-encoding, is a method to encode arbitrary data in a uniform resource identifier (URI) using only the US-ASCII characters legal within a URI. It is also used in the preparation of data of the application/x-www-form-urlencoded media type, as is often used in the submission of HTML form data in HTTP requests.`,

},
{
    id: 2,
    name: 'Base 64',
    heading: 'Base 64 Encode',
    description: `Base64 is a group of binary-to-text encoding schemes that transforms binary data into a sequence of printable characters, limited to a set of 64 unique characters.Base64 is also widely used for sending e-mail attachments, because SMTP – in its original form – was designed to transport 7-bit ASCII characters only`
},
{
    id: 3,
    name: 'QR Code',
    heading: 'QR Code',
    description: `A QR code (quick-response code) is a type of two-dimensional matrix barcode and also a machine-readable optical image that contains information specific to the labelled item, the QR code contains the data for a locator, an identifier, and for web-tracking. `

},
];
