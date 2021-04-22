export const config={
    appId:'Your Application ID on Register Azure AD',
    redirectUrl:'http://localhost:3000',
    scopes:[
        'user.read'
    ],
    authority:'https://login.microsoftonline.com/YOUR_Microsoft_Azure_AD_TENANT_NAME'
}