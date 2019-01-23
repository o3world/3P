import React from 'react';

// looks up an old url in the correct redirect file, by year.
// returns the new url if it finds one, otherwise null.
export function getRedirect(from, year, fs) {
    var redirects = JSON.parse(fs.readFileSync('./server/redirects/redirects-' + year + '.json').toString());
    // remove trailing slash, if any, so we can match one of our old urls.
    from = from.replace(/\/$/, "");
    var newurl = redirects[from];

    if (newurl != null) {
        return newurl;
    }
    return null;
}

