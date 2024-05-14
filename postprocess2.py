import json

def format_json_data(filename):
    with open(filename, 'r') as file:
        data = file.read()

    formatted_data = json.loads(data)

    product_specs = formatted_data["productSpecs"]
    nested_product_specs = {}
    current_category = None
    current_subcategory = None
    current_value = None

    for line in product_specs.splitlines():
        line = line.strip()
        if line:
            if ":" in line:  # New subcategory
                if current_category and current_subcategory and current_value:
                    nested_product_specs[current_category][current_subcategory] = current_value.strip()
                current_subcategory, current_value = line.split(":")
                if current_category:
                    nested_product_specs[current_category][current_subcategory] = current_value.strip()
            else:  # New category
                if current_category and current_subcategory and current_value:
                    nested_product_specs[current_category][current_subcategory] = current_value.strip()
                current_category = line
                current_subcategory = None
                current_value = None
                nested_product_specs[current_category] = {}

    # Add the last subcategory and value
    if current_category and current_subcategory and current_value:
        nested_product_specs[current_category][current_subcategory] = current_value.strip()

    formatted_data["productSpecs"] = nested_product_specs

    return formatted_data

# Example usage:
filename = "product_data.json"  # Replace with your actual filename
formatted_data = format_json_data(filename)

# Now you can use the formatted_data dictionary for further processing
print(json.dumps(formatted_data, indent=4))  # Print formatted data with indentation