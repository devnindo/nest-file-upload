# Nest File Upload Plugin for NestJS

The `nest-file-upload` plugin for NestJS provides developers with the ability to efficiently handle file uploads. It offers features such as URL generation with JWT tokens, dynamic configuration options, and post-upload file processing.

## Features

- **URL Generation with JWT**: Securely request an upload URL accompanied by a JWT token.
- **Dynamic Configurations**: Define file size limits, file types, and other parameters during the URL request.
- **File Processing**: Automatic processing of uploaded files, including image optimization for various versions.
- **Security**: Robust security measures ensure safe file uploads and protect against unauthorized access.

## Installation

```bash
npm install nest-file-upload --save
```

## Usage

1. **Import the Module**:

```typescript
import { NestFileUploadModule } from 'nest-file-upload';

@Module({
  imports: [NestFileUploadModule],
})
export class AppModule {}
```

2. **Request an Upload URL**:

```typescript
// Example code to request an upload URL
```

3. **Handle File Uploads**:

```typescript
// Example code to handle file uploads
```

For more detailed usage examples, please refer to the [official documentation](#).

## Configuration

Configure aspects like file size limit, file type, and expiry time:

```typescript
// Example code to set configurations
```

## Security

This plugin incorporates built-in security features, including JWT token generation for secure uploads. Ensure your secret keys remain confidential.

## Contributing

Contributions are always welcome! Please see our [contributing guidelines](#) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
