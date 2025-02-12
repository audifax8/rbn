import Script from 'next/script'
 
export default function configure() {
  return (
    <>
      <Script src="//cdn-prod.fluidconfigure.com/static/code/configure-ui/stable/js/configure-app.js" />
    </>
  )
}