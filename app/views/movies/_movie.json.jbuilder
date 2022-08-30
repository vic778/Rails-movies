json.extract! movie, :id, :title, :created_at, :updated_at
json.url movie_url(movie, format: :json)
