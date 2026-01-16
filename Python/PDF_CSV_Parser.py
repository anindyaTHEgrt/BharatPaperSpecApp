import camelot

# Read all tables from all pages
tables = camelot.read_pdf(
    "JKTuffcote_Spec.pdf",
    pages="all",
    flavor="lattice"  # use 'stream' if lattice fails
)

print(f"Found {len(tables)} tables")

# Export each table as a separate CSV
for i, table in enumerate(tables):
    table.to_csv(f"specsheet_table_{i+1}.csv", index=False)
