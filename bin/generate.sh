#!/bin/sh

# Default values
DEFAULT_SRC_PATH="./src/api/openapi"
DEFAULT_API_ENDPOINT="http://localhost:8080/v3/api-docs"

# Parse arguments
while [ "$#" -gt 0 ]; do
  case "$1" in
    -d)
      SRC_PATH="$2" # If -d flag is present, set the value for SRC_PATH
      shift 2 ;;    # Skip both -d and its value
    -i)
      API_ENDPOINT="$2" # If -i flag is present, set the value for API_ENDPOINT
      shift 2 ;;        # Skip both -i and its value
    *)
      echo "Unknown option: $1"
      exit 1 ;;
  esac
done

# Use provided paths or fallbacks
SRC_PATH=${SRC_PATH:-$DEFAULT_SRC_PATH}
API_ENDPOINT=${API_ENDPOINT:-$DEFAULT_API_ENDPOINT}

echo "Generating Typescript Models and API in $SRC_PATH using API endpoint $API_ENDPOINT"

# Run the openapi-generator-cli with the resolved paths
openapi-generator-cli generate \
  -i "$API_ENDPOINT" \
  -g typescript-fetch \
  -o "$SRC_PATH" \
  --additional-properties=withSeparateModelsAndApi=true