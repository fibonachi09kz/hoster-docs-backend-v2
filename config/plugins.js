module.exports = ({ env })=>({
    upload: {
		config: {
			provider: 'local',
			providerOptions: {
				sizeLimit: 1000000,
			},
		},
    },
	tinymce: {
        enabled: true,
        config: {
            editor: {
                outputFormat: "html",
                editorConfig: {
                    language: "sk",
                    height: 500,
                    menubar: false,
                    extended_valid_elements: "span, img, small",
                    forced_root_block: "",
                    convert_urls: false,
                    entity_encoding: "raw",
                    plugins:
                        "advlist autolink lists link image charmap preview anchor \
                        searchreplace visualblocks code fullscreen table emoticons nonbreaking \
                        insertdatetime media table code help wordcount",
                    toolbar:
                        "undo redo | styles | bold italic forecolor backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        table emoticons visualblocks code|\
                        nonbreaking bullist numlist outdent indent | removeformat | help",
                    style_formats: [
                        {
                            title: "Headings",
                            items: [
                                { title: "h1", block: "h1" },
                                { title: "h2", block: "h2" },
                                { title: "h3", block: "h3" },
                                { title: "h4", block: "h4" },
                                { title: "h5", block: "h5" },
                                { title: "h6", block: "h6" },
                            ],
                        },

                        {
                            title: "Text",
                            items: [
                                { title: "Paragraph", block: "p" },
                                {
                                    title: "Paragraph with small letters",
                                    block: "small",
                                },
                            ],
                        },
                    ],
                },
            },
        },
    },
	email: {
		provider: 'smtp',
		providerOptions: {
			host: 'smtp.beautiful-lalande.86-107-44-146.plesk.page',
			port: 587,
			secure: true,
			username: 'Wv7$0ia40',
			password: 'Wv7$0ia40',
			rejectUnauthorized: true,
			requireTLS: true,
			connectionTimeout: 1,
		},
		settings: {
		  	from: 'no-reply@beautiful-lalande.86-107-44-146.plesk.page',
		  	replyTo: '',
		},
	},
});