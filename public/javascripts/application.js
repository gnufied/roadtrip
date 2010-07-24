// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
// jQuery ajax requests should land in format.js block.
//----------------------------------------------------------------------------
$.ajaxSetup({
    'beforeSend': function(xhr) {
        xhr.setRequestHeader("Accept", "");
        xhr.setRequestHeader("Accept", "text/javascript")
    }
});

// Sends authenticity token with ajax request if required.
//----------------------------------------------------------------------------
$(document).ajaxSend(function(event, request, settings) {
    if (typeof(AUTH_TOKEN) == "undefined") return;
    if (settings.type == 'GET') return; // Don't add anything to a get request let IE turn it into a POST.
    // settings.data is a serialized string like "foo=bar&baz=boink" (or null)
    settings.data = settings.data || "";
    if (settings.data.indexOf("authenticity_token") < 0) {
        settings.data += (settings.data ? "&" : "") + "authenticity_token=" + encodeURIComponent(AUTH_TOKEN);
    }
});
