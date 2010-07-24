# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_roadtrip_session',
  :secret      => '2460b1d931ab058c68c5a36f1d65aeb43335b5dfb47bf79d9971cb8c3677289cb7968fc2ebf3331134be3a23e821759cd1d859f3a20db8b0370b5b24e5ff5133'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
