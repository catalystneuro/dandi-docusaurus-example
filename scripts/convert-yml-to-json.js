const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

// Paths
const yamlPath = path.resolve(__dirname, "../data/team_members.yml");
const jsonPath = path.resolve(__dirname, "../data/team_members.json");

try {
    // Read YAML file
    const yamlData = yaml.load(fs.readFileSync(yamlPath, "utf8"));

    // Write JSON file
    fs.writeFileSync(jsonPath, JSON.stringify(yamlData, null, 2), "utf8");

    console.log("YAML successfully converted to JSON!");
} catch (err) {
    console.error("Error converting YAML to JSON:", err);
    process.exit(1);
}


// Paths
const newsyamlPath = path.resolve(__dirname, "../data/news.yml");
const newsjsonPath = path.resolve(__dirname, "../data/news.json");

try {
    // Read YAML file
    const newsyamlData = yaml.load(fs.readFileSync(newsyamlPath, "utf8"));

    // Write JSON file
    fs.writeFileSync(newsjsonPath, JSON.stringify(newsyamlData, null, 2), "utf8");

    console.log("YAML successfully converted to JSON!");
} catch (err) {
    console.error("Error converting YAML to JSON:", err);
    process.exit(1);
}
