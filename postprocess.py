import json

def format_product_specs(product_specs):
    formatted_specs = {}
    current_category = None
    for line in product_specs.splitlines():
        line = line.strip()
        if line:
            if line.endswith(":"):
                current_category = line[:-1].strip()
                formatted_specs[current_category] = {}
            elif current_category:
                key_value = line.split(":", 1)
                key = key_value[0].strip()
                value = key_value[1].strip()
                formatted_specs[current_category][key] = value
    return formatted_specs

# Read JSON data from file
with open('product_data.json', 'r') as file:
    data = json.load(file)

# Format product specs
formatted_specs = format_product_specs(data['productSpecs'])

# Update data with formatted specs
data['productSpecs'] = formatted_specs

# Write formatted data back to file
with open('formatted_data.json', 'w') as file:
    json.dump(data, file, indent=2)
