terraform {
  required_version = ">= 1.0.0"
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "1.0.0"
    }
    railway = {
      source  = "railwayapp/railway"
      version = "0.2.5"
    }
  }
}

provider "vercel" {
  # Vercel API token configured via environment variables or CI secrets
}

provider "railway" {
  # Railway API token configured via environment variables or CI secrets
}

# Define your Railway database and Vercel project resources here. This is a placeholder.
