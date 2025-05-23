sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    browser->>server: { "note": "HTML is easy" }

    activate server
    server-->>browser: 201 / Content-Type JSON
    deactivate server

    Note right of browser: receives a JSON, that is inserted in browser with DOM manipulation later