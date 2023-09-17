/* eslint-disable import/no-anonymous-default-export */
require("dotenv").config();
import { SessionsClient } from "@google-cloud/dialogflow";
import { v4 as uuid } from "uuid";

export default async (req, res) => {
	if (req.method === "POST") {
		try {
			const { MSG } = req.body;
			console.log("Received MSG:", MSG);

			const projectId = "spaceotakuchatbot-utkt";
			const keyFilePath = JSON.parse(process.env.DIALOGFLOW_KEY_FILE); // Parse the environment variable as JSON
			const sessionClient = new SessionsClient({
				credentials: keyFilePath, // Use 'credentials' instead of 'keyFilename'
			});

			const sessionId = uuid();
			const sessionPath = sessionClient.projectAgentSessionPath(
				projectId,
				sessionId
			);

			const request = {
				session: sessionPath,
				queryInput: {
					text: {
						text: MSG,
						languageCode: "en-US",
					},
				},
			};

			console.log("Request Payload:", request);

			const responses = await sessionClient.detectIntent(request);
			const result = responses[0].queryResult;

			console.log("Dialogflow Response:", result.fulfillmentText);

			res.status(200).json({ Reply: result.fulfillmentText });
		} catch (error) {
			console.error("Error:", error);
			res.status(500).json({ error: "An error occurred." });
		}
	} else {
		res.status(405).json({ error: "Method not allowed" });
	}
};
