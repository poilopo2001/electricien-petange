#!/bin/bash

# Intelligent replacement script for Dudelange electrician website
# This script performs safe, comprehensive replacements across the codebase

echo "Starting intelligent data replacement for Dudelange..."
echo "=================================================="

# File patterns to process (excluding node_modules, .git, package-lock.json)
FILE_PATTERNS="-name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.jsx' -o -name '*.json' -o -name '*.md'"

# Count files before processing
TOTAL_FILES=$(find . -type f \( $FILE_PATTERNS \) ! -path "*/node_modules/*" ! -path "*/.git/*" ! -path "*/package-lock.json" | wc -l)
echo "Processing $TOTAL_FILES files..."
echo ""

# Replacement pairs (OLD -> NEW)
declare -A REPLACEMENTS=(
    # Business name variations
    ["Elec SMC - Électricien à Saint Martin de Crau"]="Électricité Dudelange - Elektriker Diddeleng"
    ["Elec SMC"]="Électricité Dudelange"
    ["elec-smc"]="elec-dudelange"
    ["elec_smc"]="elec_dudelange"

    # City names
    ["Saint Martin de Crau"]="Dudelange"
    ["Saint-Martin-de-Crau"]="Dudelange"

    # Postal codes
    ["13310"]="L-3401"

    # Regions and departments
    ["Provence-Alpes-Côte d'Azur"]="Luxembourg"
    ["Bouches-du-Rhône"]="Esch-sur-Alzette"
    ["département des Bouches-du-Rhône"]="district d'Esch-sur-Alzette"
    ["département 13"]="Luxembourg"

    # Phone numbers
    ["04 90 47 23 04"]="+352 51 23 45"
    ["+33 4 90 47 23 04"]="+352 51 23 45"

    # Email addresses
    ["contact@elec-smc.fr"]="contact@elec-dudelange.lu"

    # Domain names
    ["elec-smc.fr"]="elec-dudelange.lu"
    ["www.elec-smc.fr"]="www.elec-dudelange.lu"
    ["https://elec-smc.fr"]="https://elec-dudelange.lu"
    ["https://www.elec-smc.fr"]="https://www.elec-dudelange.lu"

    # Package name
    ["elec-saint-martin-de-crau"]="elec-dudelange"

    # Address
    ["Adresse à compléter, 13310 Saint Martin de Crau"]="Adresse à compléter, L-3401 Dudelange"

    # Coordinates (Saint Martin de Crau -> Dudelange)
    ["lat: 43.6394"]="lat: 49.4833"
    ["lng: 4.8105"]="lng: 6.0833"
    ["43.6394"]="49.4833"
    ["4.8105"]="6.0833"

    # Testimonial cities
    ["Arles"]="Bettembourg"
    ["Salon-de-Provence"]="Esch-sur-Alzette"
    ["Istres"]="Luxembourg-Ville"
    ["Miramas"]="Kayl"

    # Country
    ["France"]="Luxembourg"
)

# Perform replacements
REPLACEMENT_COUNT=0
for OLD in "${!REPLACEMENTS[@]}"; do
    NEW="${REPLACEMENTS[$OLD]}"

    # Use find to get files and sed to replace
    FILES_CHANGED=0
    while IFS= read -r file; do
        if [ -f "$file" ]; then
            # Check if file contains the old string
            if grep -q -F "$OLD" "$file" 2>/dev/null; then
                # Create backup and replace
                sed -i.bak "s|$(echo "$OLD" | sed 's/[^^]/[&]/g; s/\^/\\^/g')|$NEW|g" "$file"
                rm -f "${file}.bak"
                ((FILES_CHANGED++))
                ((REPLACEMENT_COUNT++))
            fi
        fi
    done < <(find . -type f \( $FILE_PATTERNS \) ! -path "*/node_modules/*" ! -path "*/.git/*" ! -path "*/package-lock.json")

    if [ $FILES_CHANGED -gt 0 ]; then
        echo "✓ Replaced '$OLD' -> '$NEW' in $FILES_CHANGED file(s)"
    fi
done

echo ""
echo "=================================================="
echo "Replacement complete!"
echo "Total replacements: $REPLACEMENT_COUNT"
echo "Files processed: $TOTAL_FILES"
echo "=================================================="
