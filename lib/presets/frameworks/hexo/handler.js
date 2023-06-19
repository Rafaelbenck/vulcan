import { mountSPA } from "#edge";

  try {
    const myApp = mountSPA(event.request.url, AZION.VERSION_ID);
    const response = await fetch(myApp)
    return response;
  } catch (e) {
    return new Response(e.message || e.toString(), { status: 500 }); // TODO: create Azion/Vulcan custom 404
  }